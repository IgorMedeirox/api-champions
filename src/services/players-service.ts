import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import {
  deletePlayer,
  findAllPlayers,
  findAndModifyPlayer,
  findPlayerById,
  insertPlayer,
} from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = await httpResponse.created();
  } else {
    response = await httpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await deletePlayer(id);

  if (isDeleted) {
    response = await httpResponse.ok({ message: "Deleted!" });
  } else {
    response = await httpResponse.badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await findAndModifyPlayer(id, statistics);
  const response = await httpResponse.ok(data);

  return response;
};
