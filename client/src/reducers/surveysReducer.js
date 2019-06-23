import { FETCH_SURVEYS } from '../actions/types'

export default function(state = [], action) {
  //最初の状態ではnullであるからロード画面、以降ではfalseかユーザー情報を返す。
	switch (action.type) {
		case FETCH_SURVEYS:
			return action.payload;
		default:
			return state;
	}
}
