import request from "superagent";
import { IconPresetType, RoomDeleteActionType, TaskStatus } from "./constants";
interface RoomsPostOptions {
    description?: string;
    icon_preset?: IconPresetType;
    link?: boolean;
    link_code?: string;
    link_need_acceptance?: boolean;
    members_member_ids?: number[];
    members_readonly_ids?: number[];
}
interface RoomsPutWithIdOptions {
    description?: string;
    icon_preset?: IconPresetType;
    name?: string;
}
interface RoomsMembersPutOptions {
    members_member_ids?: number[];
    members_readonly_ids?: number[];
}
interface RoomsMessagesGetOptions {
    force?: boolean;
}
interface RoomsMessagesPostOptions {
    self_unread?: boolean;
}
interface RoomsMessagesReadPutOptions {
    message_id?: string;
}
interface RoomsTasksGetOptions {
    account_id?: number;
    assigned_by_account_id?: number;
    status?: TaskStatus;
}
interface RoomsTasksPostOptions {
    limit?: number;
}
interface RoomsFilesGetOptions {
    account_id?: number;
}
interface RoomsFilesPostOptions {
    message?: string;
}
interface RoomsFilesGetWithIdOptions {
    create_download_url?: boolean;
}
interface RoomsLinkPostOptions {
    code?: string;
    description?: string;
    need_acceptance?: boolean;
}
interface RoomsLinkPutOptions {
    code?: string;
    description?: string;
    need_acceptance?: boolean;
}
export declare function get(apiToken: string): Promise<{} | request.ResponseError | null>;
export declare function post(apiToken: string, name: string, members_admin_ids: number[], options?: RoomsPostOptions): Promise<{} | request.ResponseError | null>;
export declare function getWithId(apiToken: string, room_id: number): Promise<{} | request.ResponseError | null>;
export declare function putWithId(apiToken: string, room_id: number, options?: RoomsPutWithIdOptions): Promise<{} | request.ResponseError | null>;
export declare function deleteWithId(apiToken: string, room_id: number, action_type: RoomDeleteActionType): Promise<{} | request.ResponseError | null>;
export declare const members: {
    get: (apiToken: string, room_id: number) => Promise<{} | request.ResponseError | null>;
    put: (apiToken: string, room_id: number, members_admin_ids: number[], options?: RoomsMembersPutOptions) => Promise<{} | request.ResponseError | null>;
};
export declare const messages: {
    get: (apiToken: string, room_id: number, options?: RoomsMessagesGetOptions) => Promise<{} | request.ResponseError | null>;
    post: (apiToken: string, room_id: number, body: string, options?: RoomsMessagesPostOptions) => Promise<{} | request.ResponseError | null>;
    read: {
        put: (apiToken: string, room_id: number, options?: RoomsMessagesReadPutOptions) => Promise<{} | request.ResponseError | null>;
    };
    unread: {
        put: (apiToken: string, room_id: number, message_id: string) => Promise<{} | request.ResponseError | null>;
    };
    getWithId: (apiToken: string, room_id: number, message_id: string) => Promise<{} | request.ResponseError | null>;
    putWithId: (apiToken: string, room_id: number, message_id: string, body: string) => Promise<{} | request.ResponseError | null>;
    deleteWithId: (apiToken: string, room_id: number, message_id: string) => Promise<{} | request.ResponseError | null>;
};
export declare const tasks: {
    get: (apiToken: string, room_id: number, options?: RoomsTasksGetOptions) => Promise<{} | request.ResponseError | null>;
    post: (apiToken: string, room_id: number, body: string, to_ids: number[], options?: RoomsTasksPostOptions) => Promise<{} | request.ResponseError | null>;
    getWithId: (apiToken: string, room_id: number, task_id: string) => Promise<{} | request.ResponseError | null>;
};
export declare const files: {
    get: (apiToken: string, room_id: number, options?: RoomsFilesGetOptions) => Promise<{} | request.ResponseError | null>;
    post: (apiToken: string, room_id: number, file: File, options?: RoomsFilesPostOptions) => Promise<{} | request.ResponseError | null>;
    getWithId: (apiToken: string, room_id: number, file_id: string, options?: RoomsFilesGetWithIdOptions) => Promise<{} | request.ResponseError | null>;
};
export declare const link: {
    get: (apiToken: string, room_id: string) => Promise<{} | request.ResponseError | null>;
    post: (apiToken: string, room_id: number, options?: RoomsLinkPostOptions) => Promise<{} | request.ResponseError | null>;
    put: (apiToken: string, room_id: number, options?: RoomsLinkPutOptions) => Promise<{} | request.ResponseError | null>;
    delete: (apiToken: string, room_id: number) => Promise<{} | request.ResponseError | null>;
};
export {};
