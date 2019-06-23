import React from "react";
import { Mutation } from "react-apollo";
import { CREATE_USER } from "../../queries";
import { Link, withRouter } from "react-router-dom";
import {
	Grid,
	Form,
	Segment,
	Button,
	Header,
	Message,
	Icon,
	Transition
} from "semantic-ui-react";
// import "./Auth.css";

class Signup extends React.Component {
	state = {
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
		errors: [],
		onOpen: false
	};

	isFormValid = () => {
		const errors = [];
		let error;
		let valid = true;
		if (this.isFormEmpty(this.state)) {
			error = { message: "全てのフィールドを埋めてください" };
			this.setState({ errors: errors.concat(error) });
			valid = false;
		}
		if (!this.isPasswordValid(this.state)) {
			error = { message: "パスワードが不正です" };
			this.setState({ errors: errors.concat(error) });
			valid = false;
		}
		return valid;
	};

	isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
		return (
			!username.length ||
			!email.length ||
			!password.length ||
			!passwordConfirmation.length
		);
	};

	isPasswordValid = ({ password, passwordConfirmation }) => {
		if (password < 6) {
			return false;
		} else if (password !== passwordConfirmation) {
			return false;
		} else {
			return true;
		}
	};

	displayErrors = errors => {
		return errors.map((error, i) => <p key={i}>{error.message}</p>);
	};

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event, createUser) => {
		event.preventDefault();
		if (this.isFormValid()) {
			this.setState({ errors: [] });
			createUser().then(async ({ data }) => {
				localStorage.setItem("token", data.createUser.token);
				await this.props.refetch();
			});
		}
	};

	handleInputError = (errors, inputName) => {
		return errors.some(error => error.message.includes(inputName))
			? "error"
			: "";
	};

	render() {
		const {
			username,
			email,
			password,
			passwordConfirmation,
			errors,
			onOpen
		} = this.state;
		return (
			<Grid className="Auth" textAlign="center" verticalAlign="middle">
				{/* <Grid.Column style={{ maxWidth: 367 }}>
					<Header as="h2" icon color="purple" textAlign="center">
						<Icon name="new pied piper" color="purple" /> Manehabi 会員登録
					</Header>
					{onOpen ? null : (
						<Mutation
							mutation={CREATE_USER}
							variables={{ username, email, password, passwordConfirmation }}
							onCompleted={() => this.setState({ onOpen: true })}>
							{(createUser, { data, loading, error }) => {
								if (errors.length === 0) {
									if (error) {
										this.setState({ errors: error.graphQLErrors[0].data });
									}
								}

								return (
									<Form
										size="large"
										onSubmit={event => this.handleSubmit(event, createUser)}>
										<Segment stacked>
											<Form.Input
												fluid
												name="username"
												icon="user"
												iconPosition="left"
												placeholder="ユーザ名"
												onChange={this.handleChange}
												value={username}
												className={this.handleInputError(errors, "ユーザー")}
												type="text"
											/>
											<Form.Input
												fluid
												name="email"
												icon="mail"
												iconPosition="left"
												placeholder="Eメールアドレス"
												onChange={this.handleChange}
												value={email}
												className={this.handleInputError(errors, "Eメール")}
												type="email"
											/>
											<Form.Input
												fluid
												name="password"
												icon="lock"
												iconPosition="left"
												placeholder="パスワード"
												onChange={this.handleChange}
												value={password}
												className={this.handleInputError(errors, "パスワード")}
												type="password"
											/>
											<Form.Input
												fluid
												name="passwordConfirmation"
												icon="repeat"
												iconPosition="left"
												placeholder="パスワードの確認"
												onChange={this.handleChange}
												value={passwordConfirmation}
												className={this.handleInputError(errors, "パスワード")}
												type="password"
											/>
											<Button
												disabled={loading}
												className={loading ? "loading" : ""}
												color="orange"
												size="large"
												fluid>
												会員登録
											</Button>

											<Button
												disabled={loading}
												className={loading ? "loading" : ""}
												color="twitter"
												size="large"
												style={{ margin: "1em 0 0 0" }}
												fluid
												as="a"
												href="/auth/twitter">
												<Icon name="twitter" /> Twitterで会員登録する
											</Button>
										</Segment>
									</Form>
								);
							}}
						</Mutation>
					)}

					{errors.length > 0 && (
						<Message error>
							<h3>エラー</h3>
							{this.displayErrors(errors)}
						</Message>
					)}

					{onOpen ? null : (
						<Message>
							既に会員登録済みの方は
							<Link to="signin"> こちらからログイン</Link>
						</Message>
					)} */}

				{/* success message */}
				{/* <Transition
						animation="fade"
						visible={onOpen}
						duration="2000"
						onComplete={() => this.props.history.push("/habits")}>
						<Message icon success size="massive">
							<Message.Content>
								<Icon name="check" />
								<Message.Header>会員登録完了</Message.Header>
								ようこそ.Manehabiへ
							</Message.Content>
						</Message>
					</Transition>
        </Grid.Column> */}

				<Button
					// disabled={loading}
					// className={loading ? "loading" : ""}
					color="twitter"
					size="large"
					style={{ margin: "1em 0 0 0" }}
					fluid
					as="a"
					href="/auth/twitter">
					<Icon name="twitter" /> Twitterで会員登録する
				</Button>
				<a href="/auth/twitter"> aaa</a>
				<a href="/return-json"> aaa</a>
			</Grid>
		);
	}
}

export default withRouter(Signup);
