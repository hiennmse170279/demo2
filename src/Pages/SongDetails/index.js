import {
  Box,
  Button,
  Flex,
  Stack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { useContext, useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";
import {
  ChordsComponent,
  CommentComponent,
  LyricsComponent,
} from "@/components/SongDetail";
import BannerTitle from "@/components/Banner";
import { GlobalContext } from "@/Provider";
import axios from "axios";
import ReportForm from "@/components/ReportForm";
import ViewReport from "@/components/SongDetail/VIewReport";
import { FiMoreHorizontal } from "react-icons/fi";
import { AddIcon } from "@chakra-ui/icons";
import { BsMusicNoteList } from "react-icons/bs";
import EditForm from "@/components/PlaylistDetail/EditForm";
import AddSongAndPlaylist from "@/components/SongDetail/AddForm";

export const SongContext = createContext();

function highlightRedWords(line) {
  return line.replace(
    /\[(.*?)\]/g,
    '<span style="color: red; cursor:pointer; font-weight: 500">[$1]</span>'
  );
}
function SongDetail() {
  const user_id = 3;
  const { id } = useParams();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [newListStatus, setNewListStatus] = useState(false);
  const [modalView, setModalView] = useState(false);
  const { BACK_END_PORT } = useContext(GlobalContext);
  const [songData, setSongData] = useState({});
  const [songCommentData, setSongCommentData] = useState([]);
  const [listPlaylist, setListPlayList] = useState([]);
  const information = {
    userId: user_id,
    songId: id,
  };
  const [reload, setReload] = useState(false);
  let songDescription = songData?.description;
  if (songDescription) {
    songDescription = songDescription
      .split("\n")
      .map(highlightRedWords)
      .join("\n");
  }

  const handleRating = async (score) => {
    axios
      .get(
        `${BACK_END_PORT}/api/v1/song/rate?userid=${user_id}&songid=${id}&rating=${score}`
      )
      .then((response) => {
        if (response.data === "Rating Successfully") {
          alert(response.data);
        }
      })
      .catch((error) => {
        alert("Can not rate", error);
      });
  };

  const fetchData = async () => {
    try {
      const [getSongDetail, getSongComment, getListPlaylist] =
        await Promise.all([
          axios.get(`${BACK_END_PORT}/api/v1/song/${id}`),
          axios.get(`${BACK_END_PORT}/api/v1/comment/song/${id}`),
          axios.get(`${BACK_END_PORT}/api/v1/playlist/user/${user_id}`),
        ]);

      if (getSongDetail) {
        setSongData(getSongDetail.data);
      }
      if (getSongComment) {
        setSongCommentData(getSongComment.data);
      }
      if (getListPlaylist) {
        setListPlayList(getListPlaylist.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addSongToPlayList = (name) => {
    const formData = {
      name: name,
      songid: id,
    };
    axios
      .post(`${BACK_END_PORT}/api/v1/playlist/user/3`, formData)
      .then((response) => {
        if (response.data === "Add successfully!") {
          alert(response.data);
        }
      })
      .catch((error) => {
        alert("Can not rate", error);
      });
  };

  const MenuItemHTML = listPlaylist?.map((item, index) => (
    <MenuItem
      icon={<BsMusicNoteList />}
      fontSize={"14px"}
      onClick={() => {
        addSongToPlayList(item?.name);
      }}
    >
      {item?.name}
    </MenuItem>
  ));

  useEffect(() => {
    fetchData();
  }, [BACK_END_PORT]);

  useEffect(() => {
    if (reload) {
      fetchData();
    }
  }, [reload]);

  return (
    <SongContext.Provider value={{ information, setReload }}>
      <AddSongAndPlaylist
        userId={user_id}
        isOpen={newListStatus}
        onClose={() => setNewListStatus(false)}
        songId={id}
        setReload={setReload}
      />
      <ReportForm isOpen={isOpen} onClose={onClose} />
      <ViewReport isOpen={modalView} onClose={() => setModalView(false)} />
      <BannerTitle
        songData={songData}
        handleRating={handleRating}
        BACK_END_PORT={BACK_END_PORT}
        information={information}
        setReload={setReload}
      />
      <Box mb={10} mt={6}>
        <Flex m={"0 auto 1%"} w={"68%"} justifyContent={"flex-end"}>
          <Box display={"flex"}>
            <Button
              onClick={() => setModalView(true)}
              colorScheme="teal"
              variant="outline"
            >
              View report
            </Button>
            <Button onClick={onOpen} colorScheme="red" variant="outline" ml={2}>
              Report
            </Button>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FiMoreHorizontal />}
                variant="outline"
                ml={2}
                colorScheme={""}
              />
              <MenuList>
                <MenuItem
                  icon={<AddIcon />}
                  fontSize={"14px"}
                  onClick={() => {
                    setNewListStatus(true);
                  }}
                >
                  Add New Playlist
                </MenuItem>
                {MenuItemHTML}
              </MenuList>
            </Menu>
          </Box>
        </Flex>
        <Flex justifyContent={"center"}>
          <Stack w={"45%"} mr={10}>
            <LyricsComponent
              songDescription={songDescription}
              userfullname={songData?.userfullname}
              maxH={"400px"}
              overflowY={"scroll"}
            />
            <CommentComponent
              mt={8}
              maxH={"780px"}
              overflowY={"scroll"}
              songCommentData={songCommentData}
            />
          </Stack>
          <ChordsComponent
            songData={songData}
            maxH={"1220px"}
            overflowY={"scroll"}
          />
        </Flex>
      </Box>
    </SongContext.Provider>
  );
}

export default SongDetail;
