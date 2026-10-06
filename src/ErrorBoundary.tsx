import { Component, type ReactNode } from "react";

type Props = {
	children: ReactNode;
};
type State = {
	hasError: boolean,
	errorMsg: Error | null
};

class ErrorBoundary extends Component<Props, State> {
	state: State = {
		hasError: false,
		errorMsg: null
	};

	static getDerivedStateFromError(errorMsg: Error): State {
		return {
			hasError: true,
			errorMsg,
		};
	}

	render() {
		if (this.state.hasError) {
			return <>
				<div className="p-5 bg-red-950">
					<h1 className="font-black text-yellow-300">An error occured.</h1>
					{/* <p className="text-yellow-500">Report the following to the webmaster:</p> */}
					{/* <code>{this.state.errorMsg?.message}</code> */}
					<p><span className="transition p-2 inline-block cursor-pointer rounded-sm bg-blue-900 text-blue-400 hover:bg-blue-600 hover:text-cyan-300" onClick={() => location.reload()}>Reload page</span></p>
				</div>
			</>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;