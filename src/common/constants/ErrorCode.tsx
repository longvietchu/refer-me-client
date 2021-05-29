
export default class ErrorCode {

    private static instance: ErrorCode;

    public static getInstance(): ErrorCode {
        if (!ErrorCode.instance) {
            ErrorCode.instance = new ErrorCode();
        }

        return ErrorCode.instance;
    }

    public static USER_REGISTERED_NOT_ACTIVATED: number = 1001; //Tài khoản đã được đăng ký nhưng chưa đươc kích hoạt!
}
