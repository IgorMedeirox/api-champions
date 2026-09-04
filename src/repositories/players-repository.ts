import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 97,
      Shooting: 89,
      Passing: 80,
      Dribbling: 92,
      Defending: 36,
      Physical: 76,
    },
  },
  {
    id: 3,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 93,
      Dribbling: 87,
      Defending: 64,
      Physical: 78,
    },
  },
  {
    id: 4,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 89,
      Pace: 78,
      Shooting: 60,
      Passing: 71,
      Dribbling: 70,
      Defending: 91,
      Physical: 86,
    },
  },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deletePlayer = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }
  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
) => {
  const playerIndex = database.findIndex((player) => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }
};
