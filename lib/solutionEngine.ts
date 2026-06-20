export function getSolution(type: string) {
    switch (type) {
      case "ses":
        return {
          problem: [
            "案件選択ができずキャリアが環境依存になっている",
            "スキルが資産化されにくい構造"
          ],
          solution: [
            "GitHubで技術アウトプットを可視化",
            "副業で市場接続を作る",
            "技術領域を1つに絞る"
          ],
          constraintCheck: [
            "時間がない場合は環境変更が必要",
            "個人改善が難しい場合は転職検討"
          ]
        }
  
      case "inhouse":
        return {
          problem: [
            "社内最適で市場価値が見えにくい"
          ],
          solution: [
            "外部案件経験を作る",
            "副業でスキル可視化"
          ],
          constraintCheck: [
            "社内制約が強い場合は外部環境へ"
          ]
        }
  
      default:
        return {
          problem: [],
          solution: [],
          constraintCheck: []
        }
    }
  }