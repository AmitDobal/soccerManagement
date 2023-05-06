import {
  addNewPlayer,
  deleteAllPlayer,
  deletePlayerById,
  getAllPlayers,
  getPlayerByID,
  updatePlayer,
} from "../controllers/playerControllers";

const routes = (app) => {
  app
    .route("/players")
    //POST endpoint
    .post(addNewPlayer)
    //GET endpoint
    .get(getAllPlayers)
    //DELETE
    .delete(deleteAllPlayer);

  app
    .route("/player/:id")
    //GET
    .get(getPlayerByID)
    //PUT
    .put(updatePlayer)
    //DELETE
    .delete(deletePlayerById);
};

export default routes;
