function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
      // jsからpostのhttpメソッドにより、ルーティングのhttpメソッドが動作し、createアクションが作動
      // createアクションにより、postの変数に、テーブル登録用のパラメータ(memoの内容)を代入
      // そのpostの変数を「post」の名前でjson形式でjsに内容を返している
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      // createアクションより返ってきたpostデータを「item」の変数に格納
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      // メモをページに出力できたら、メモ欄を空白にする
      formText.value = "";
    };
    // 本来動作するcreateアクション(XHR.openより起動)のテーブル作成を妨げ、二重登録させないようにしている
    e.preventDefault();
  });
  
}
window.addEventListener("load", memo);