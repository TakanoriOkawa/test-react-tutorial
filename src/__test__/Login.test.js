import { render,screen } from "@testing-library/react"
import Login from "../component/Login"

// ボタンがひとつあるのかテスト
describe("Test login Component", () => {
  // test関数はsetupTests.tsでインポートしているから使える
  test("render form with 1 button", async () => {
    render(<Login /> );
    
    const button = await screen.findAllByRole("button")

    expect(button).toHaveLength(1) // 何個あるかをテストするときはtoHaveLengthを使う
    console.log(button)
  })
})