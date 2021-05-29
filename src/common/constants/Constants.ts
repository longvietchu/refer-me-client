export default class Constants {
    public static TOKEN_EXPIRE_DAYS: number = 1;
    public static TOKEN_NAME: string = 'Authorization';
    public static API_URL: String = 'https://refer-me-api.herokuapp.com';
    public static API_EVENT_URL =
        Constants.API_URL + '/v1/conversations/events';
    public static NO_AVATAR_IMAGE_SOURCE = '/assets/img/avatar.png';
    public static SOCKET_PATH = '/v1/conversations/sockets';
}
