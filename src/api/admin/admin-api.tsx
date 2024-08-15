import { ApiClient } from "../api-client";

export const retrieveAgencyUsersApi = () => ApiClient.get('admin/agency/user')