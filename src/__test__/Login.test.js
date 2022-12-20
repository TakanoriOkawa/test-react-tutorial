import { render,screen } from "@testing-library/react"
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
})