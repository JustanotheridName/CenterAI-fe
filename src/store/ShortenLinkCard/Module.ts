import { Module } from "vuex";
import { IShortenLinkCardState, ShortenLinkCardMutations } from "./types";

export const ShortenLinkCardModule: Module<IShortenLinkCardState, unknown> = {
    namespaced: true,

    state: {
        link: '',
        link_converted: '',
        ip: undefined,
        user_agent: undefined
    },

    getters: {
        convertedLink(state: IShortenLinkCardState): string {
            return state.link_converted;
        }
    },

    mutations: {
        setLink(state: IShortenLinkCardState, link: string) {
            state.link = link
        },
        setLinkConverted(state: IShortenLinkCardState, link_converted: string) {
            state.link_converted = link_converted
        }
    },

    actions: {
        convertLink({commit}, payload: string) {
            commit(ShortenLinkCardMutations.SET_LINK, payload);
            //zapytanie
        }
    }
}