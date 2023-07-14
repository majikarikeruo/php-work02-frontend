export function TranslateDateToMY(date) {
  // 登録日時を設定（この例では2020年1月1日とします）
  let registeredDate = new Date(date);

  // 現在の日時を取得
  let now = new Date();

  // 登録日時と現在の日時の差分をミリ秒で計算
  let diff = now.getTime() - registeredDate.getTime();

  // ミリ秒を年に変換（うるう年等は考慮していません）
  let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  diff -= years * (1000 * 60 * 60 * 24 * 365);

  // 残りのミリ秒を月に変換
  let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

  console.log(`経過時間: ${years} 年と ${months} ヶ月`);
  return `${years}歳${months}ヶ月`;
}
