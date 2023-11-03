import { GlobalContext } from "@/Provider";
import Pagination from "@/components/Pagination2";
import {
  Box,
  CardBody,
  Flex,
  Heading,
  Text,
  Card,
  SimpleGrid,
  CardHeader,
  Divider,
  CardFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MusicCardItem from "@/components/MusicCard";

function MyPlayListChordDetail() {
  const { id } = useParams();
  const { BACK_END_PORT } = useContext(GlobalContext);
  const user_name = "mytien";

  const [reload, setReload] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [playListDetail, setPlayListDetail] = useState({});
  const [dynamicPlaylist, setDynamicPlaylist] = useState([]);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(
    playListDetail?.chords?.length
      ? playListDetail?.chords?.length / itemsPerPage
      : 0
  );

  const handlePageChange = (page, list = []) => {
    let newList = [];
    for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage; i++) {
      if (list[i]) {
        newList.push(list[i]);
      }
    }
    setCurrentPage(page);
    setDynamicPlaylist(newList);
  };

  const removeSong = async (id) => {
    try {
      const response = await axios.post(
        `${BACK_END_PORT}/api/v1/chordcollection/remove`,
        {
          username: user_name,
          name: playListDetail?.name,
          chordId: [id],
        }
      );

      if (response.data === "Remove successfully") {
        alert(response.data);
        setReload(true);
        setTimeout(() => {
          setReload(false);
        }, 500);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData = async () => {
    try {
      const getPlayListDetail = await axios.get(
        `${BACK_END_PORT}/api/v1/chordcollection/${id}`
      );

      if (getPlayListDetail) {
        setPlayListDetail(getPlayListDetail.data);
        handlePageChange(1, getPlayListDetail.data?.chords);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const PaginationHTML = (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
      <Text>
        Showing {dynamicPlaylist?.length} out of{" "}
        {playListDetail?.chords?.length} entires
      </Text>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        list={playListDetail?.chords}
      />
    </Flex>
  );
  const SongItemsHTML = dynamicPlaylist?.map((item, index) => (
    <MusicCardItem
      key={index}
      id={item?.id}
      image={item?.image}
      content={item?.description}
      name={item?.name}
      w="250px"
      h="450px"
      color={"black"}
      mr={playListDetail?.chords?.length !== 5 ? "4%" : "0"}
      alignItems={"flex-start"}
      cursor="pointer"
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      isChorListDetail={true}
      removeSong={removeSong}
    />
  ));
  useEffect(() => {
    fetchData();
    handlePageChange(1);
  }, []);

  useEffect(() => {
    if (reload) {
      fetchData();
    }
  }, [reload]);

  return (
    <Box>
      <Box w={"60%"} m={"3% auto"} p={"0"}>
        {playListDetail?.chords?.length ? (
          <>
            <Card>
              <CardHeader>
                <Text>Playlist</Text>
                <Heading>{playListDetail?.name}</Heading>
              </CardHeader>
              <Divider />
              <CardBody my={5}>
                <SimpleGrid columns={3} spacing={9} justifyItems={"center"}>
                  {SongItemsHTML}
                </SimpleGrid>
              </CardBody>
              <Divider />
              <CardFooter>{PaginationHTML}</CardFooter>
            </Card>
          </>
        ) : (
          <Card mt={12}>
            <CardBody>
              <Heading>List song is empty</Heading>
            </CardBody>
          </Card>
        )}
      </Box>
    </Box>
  );
}

export default MyPlayListChordDetail;
