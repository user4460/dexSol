//asyncとは、非同期処理を行うための機能
async function main() {
   //deplyerとは、デプロイするためのオブジェクト
   //getSignersとは、デプロイするアカウントを取得するためのメソッド
   const [deployer] = await ethers.getSigners();

   console.log("Deploying contracts with the account:", deployer.address);

   //getBalanceとは、アカウントの残高を取得するためのメソッド
   console.log("Account balance:", (await deployer.getBalance()).toString());

   //getContractFactoryとは、コントラクトをデプロイするためのメソッド
   const Token = await ethers.getContractFactory("Token");
   const token = await Token.deploy();
   //deploed()とは、コントラクトがデプロイされるまで待つためのメソッド

   console.log("Token address:", token.address);
}

main()
   //thenとは、非同期処理が終わった後に実行する処理を記述するためのメソッド
   //exitとは、プログラムを終了するためのメソッド
   .then(() => process.exit(0))
   //catchとは、エラーが発生した場合に実行する処理を記述するためのメソッド
   .catch((error) => {
      console.error(error);
      process.exit(1);
   });