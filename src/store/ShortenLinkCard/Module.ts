import { Module } from "vuex";
import { IShortenLinkCardState, ShortenLinkCardMutations } from "./types";
import convertService from "@/services/ShortenLinkCard/convert.service";
import { BaseAxiosService } from "@/services/base.service";

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
            convertService.convertLink({link: payload})
            .then(data => {
                console.log("DATA", data)
                commit(ShortenLinkCardMutations.SET_LINK_CONVERTED, BaseAxiosService.base_api_url + data.link_converted);
            })
        }
    }
}