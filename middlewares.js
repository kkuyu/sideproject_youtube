import multer from "multer";
import routes from "./routes";

const multerVideos = multer({ dest: 'uploads/videos/' });
const multerAvatar = multer({ dest: "uploads/avatars/" });

export const localMiddlewere = (req, res, next) => {
    res.locals.siteName = "Side Project, Cloning Youtube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || {};
    next();
}

export const onlyPublic = (req, res, next) => {
    if(req.user){
        res.redirect(routes.home);
    }else{
        next();
    }
}

export const onlyPrivate = (req, res, next) => {
    if(req.user){
        next();
    }else{
        res.redirect(routes.home);
    }
}

export const uploadVideo = multerVideos.single('videoFile');
export const uploadAvatar = multerAvatar.single('avatar');