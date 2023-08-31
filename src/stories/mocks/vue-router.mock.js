import {
    useRouter as realUseRouter,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    useRoute as realUseRoute,
} from "vue-router"

export function useRouter() {
    return realUseRouter()
}

export function useRoute() {
    return {
        path: "/mocked-path", // Add the properties you need to mock here
    }
}
