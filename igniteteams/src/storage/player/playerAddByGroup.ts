import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { AppError } from "@/utils/AppError";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string){
    try {
        const storedPlayers = await playersGetByGroup(group);

        const isPlayerAlreadyStored = storedPlayers.some(player => player.name === newPlayer.name);

        if (isPlayerAlreadyStored) {
            throw new AppError('Já existe um jogador cadastrado com esse nome no time.');
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer]);


        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)

    } catch (error) {
        throw error;
    }
}