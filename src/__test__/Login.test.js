import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Login, { validateEmail } from "../component/Login"

// ボタンがひとつあるのかテスト
describe("Test login Component", () => {
  // test関数はsetupTests.tsでインポートしているから使える
  test("render form with 1 button", async () => {
    render(<Login /> );
    const button = await screen.findAllByRole("button")
    expect(button).toHaveLength(1) // 何個あるかをテストするときはtoHaveLengthを使う
  })

  // 失敗するべき
  test("should be failed on email validation", () => {
    // @が無いときは失敗する
    const testEmail = "taka.com";
    // not:間違っていることが今回は真なので、trueを入れる
    expect(validateEmail(testEmail)).not.toBe(true);
  });

  // 成功するかどうか
  test("should be successed on email validation", () => {
    const testEmail = "taka@gmail.com";
    expect(validateEmail(testEmail)).toBe(true);
  });

  // type=passwordが指定されているかどうか
  test("render password type form", () => {
    render(<Login />);
    const form = screen.getByPlaceholderText("パスワード入力")
    expect(form).toHaveAttribute("type", "password");
  })


  test("should be able to submit the form", () => {
    render(<Login />);
    const submitButton = screen.getByTestId("submit") // data-testid属性に指定しているもの
    const email = screen.getByPlaceholderText("メールアドレス入力")
    const password = screen.getByPlaceholderText("パスワード入力")
    // テスト上で入力を行うことができる
    userEvent.type(email, "taka@gmail.com");
    userEvent.type(password, "111111");

    userEvent.click(submitButton);

    const userInfo = screen.getByText("taka@gmail.com");
    expect(userInfo).toBeInTheDocument();
  })
})