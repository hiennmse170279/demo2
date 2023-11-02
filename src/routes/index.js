import Home from "../Pages/Home";
import listBeat from "../Pages/ListBeat";
import ListUser from "../Pages/ListUser/ListUser";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateBeat from "../Pages/UpdateBeat";
import UploadBeat from "../Pages/UploadBeat";
import UploadFile from "../Pages/UploadFile";
import ViewBeat from "../Pages/ViewBeat";
import ViewCart from "../Pages/ViewCart";
import OwlCarousel from "../components/OwlCarousel";
import ViewDetailBeat from "../Pages/ViewDetailBeat";
import ListBeat2 from "../Pages/ListBeat2";
import ChordsDetails from "../Pages/ChordsDetails";
import Songs from "../Pages/Songs";
import ViewBeatsAll from "../Pages/ViewBeatsAll";
import CustomerBeats from "../Pages/CustomerBeats";
import ListSong from "../Pages/ListSong";
import Uploadsong from "../Pages/UploadSong";
import MusicianProfile from "../Pages/MusicianProfile";
import AdminProfile from "../Pages/AdminProfile";
import ViewDetailSong from "../Pages/ViewDetailSong";
import ListUser2 from "../Pages/ListUser2";
import MyProfile from "../Pages/MyProfile";
import RegisterActivation from "../Pages/RegisterActivation";
import ListBeatPurchased from "../Pages/listBeatPurchased";
import ViewDetailBeatPurchased from "../Pages/ViewDetailBeatPurchased";
import PaymentSuccess from "../Pages/PaymentSuccess";
import PaymentCancel from "../Pages/PaymentCancel";
import ViewDetailsUser from "../Pages/ViewDetailsUser";
import ViewDetailsMusician from "../Pages/ViewDetailsMusician";
import ViewDetailBeatMusician from "../Pages/ViewDetailBeatMusician";
import ViewDetailUser2 from "../Pages/ViewDetailsUserByAdmin";
import ListOfSong from "../Pages/ListOfSong";
import DetailUser from "../Pages/DetailUser";
import FeedbackMusician from "../Pages/FeedbackMusician";
import UpdateProfile from "../Pages/UpdateProfile";
import ReportUser from "../Pages/ReportUser";
import ViewDetailsUserByAdmin from "../Pages/ViewDetailsUserByAdmin";
import ListBeatSoldOut from "../Pages/ListBeatSoldOut";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/updatebeat/:beatId",
    component: UpdateBeat,
  },
  {
    path: "/uploadbeat",
    component: UploadBeat,
  },
  {
    path: "/viewbeat",
    component: ViewBeat,
  },
  {
    path: "/listuser",
    component: ListUser,
  },
  {
    path: "uploadfile",
    component: UploadFile,
  },

  {
    path: "OwlCarousel",
    component: OwlCarousel,
  },
  {
    path: "/listbeat",
    component: listBeat,
  },
  {
    path: "/viewcart",
    component: ViewCart,
  },
  {
    path: "/viewdetailbeat/:beatId",
    component: ViewDetailBeat,
  },
  {
    path: "/viewdetailbeatpurchased/:beatId",
    component: ViewDetailBeatPurchased,
  },
  {
    path: "/viewdetailbeatmusician/:beatId",
    component: ViewDetailBeatMusician,
  },
  {
    path: "/listbeat2",
    component: ListBeat2,
  }
  , {
    path: "/chordsdetails",
    component: ChordsDetails,
  }
  , {
    path: "/songs",
    component: Songs,
  },
  {
    path: "/viewbeatsall",
    component: ViewBeatsAll,
  },
  {
    path: "/customerbeats",
    component: CustomerBeats,
  },
  {
    path: "/listsong",
    component: ListSong,
  },
  {
    path: "/uploadsong",
    component: Uploadsong,
  },
  {
    path: "/musicianprofile",
    component: MusicianProfile,
  },
  {
    path: "/adminprofile",
    component: AdminProfile,
  },
  {
    path: "/viewdetailsong",
    component: ViewDetailSong,
  },
  {
    path: "/myprofile",
    component: MyProfile,
  },
  
  {
    path: "/registeractivation",
    component: RegisterActivation,
  },  
  {
    path: "/listbeatpurchased",
    component: ListBeatPurchased,
  },
  {
    path: "/listbeatsoldout",
    component: ListBeatSoldOut,
  },
  {
    path: "/listuser2",
    component: ListUser2,
  },
  {
    path: "/payment/cancel",
    component: PaymentCancel,
  },
  {
    path: "/payment/success",
    component: PaymentSuccess,
  },
  {
    path: "/listuser2",
    component: ListUser2,
  },
  {
    path: "/ViewDetailsUserByAdmin/:id",
    component: ViewDetailsUserByAdmin,
  },
  {
    path: "/ViewDetailsMusician/:id",
    component: ViewDetailsMusician,
  },
  {
    path: "ViewDetailsUser/:id",
    component: ViewDetailsUser,
  },
  {
    path: "/listofsong",
    component: ListOfSong,
  },
  {
    path: "/DetailUser",
    component: DetailUser,
  },
  {
    path: "/FeedbackMusician",
    component: FeedbackMusician,
  },
  {
    path: "/UpdateProfile",
    component: UpdateProfile,
  },
  {
    path: "/ReportUser",
    component: ReportUser,
  },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
