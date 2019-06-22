import React from "react";
import "./Homepage.css";

const Homepage = ({ history }) => {
	return (
		<div className="homepage">
			<div className="ui vertical masthead center aligned segment">
				<div className="ui text container">
					<h1 className="ui inverted stackable header">
						<div>
							<i
								className="list alternate outline icon"
								style={{ marginRight: "0.5em" }}
							/>
							<div className="content">Manehabi</div>
						</div>
					</h1>
					<h3>皆で習慣を共有する新感覚アプリ</h3>
					<div
						onClick={() => history.push("/habits")}
						className="ui huge white inverted button ">
						皆の習慣を見てみる
						<i className="right arrow icon" />
					</div>
					<div
						onClick={() => history.push("/signup")}
						className="ui huge white inverted button">
						会員登録
						<i className="right arrow icon" />
					</div>
				</div>
				<div
					className="ui grid centered stackable center"
					style={{ marginTop: "1.5em" }}>
					<div className="three wide column">
						<h2 className="ui center aligned icon header inverted">
							<i className=" users icon" />
							仲間とともに
						</h2>
						<p className="inverted">
							自分一人では習慣が続かない人も周りから応援されていればきっと続けられる！
						</p>
					</div>
					<div className="three wide column">
						<h2 className="ui center aligned icon header inverted">
							<i className=" tag icon" />
							毎日の習慣の積み重ねを可視化
						</h2>
						<p className="inverted">
							習慣は積み重ね方式ならばどのくらい自分がこれまでに努力してきたかが一瞬でわかるのでモチベ維持もしやすい！
						</p>
					</div>
					<div className="three wide column">
						<h2 className="ui center aligned icon header inverted">
							<i className=" search icon" />
							色んな人の習慣を検索できる
						</h2>
						<p className="inverted">
							人気の習慣に加えて、様々な人の習慣を確認できるので新たな習慣の初めに役立つかも
						</p>
					</div>
				</div>
				<div className="ui divider" />
				<footer className="author">
					<p>Manehapi is made by kaleido</p>
					<ul className="legal">
						<li>
							<a href="https://kaleido01.com/">
								Copyright © kaleido01 2019～2019 All Rights Reserved
							</a>
						</li>
					</ul>
				</footer>
			</div>
		</div>
	);
};

export default Homepage;
