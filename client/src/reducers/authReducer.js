import { FETCH_USER } from "./../actions/types";

export default function(state = null, action) {
  //最初の状態ではnullであるからロード画面、以降ではfalseかユーザー情報を返す。
	switch (action.type) {
		case FETCH_USER:
			return action.payload  || false;
		default:
			return state;
	}
}
