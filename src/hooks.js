import { dev } from "$app/env";

export async function getSession() {
    return {
        // Auto authorize in dev mode
        isAuthorized: dev
    }
}