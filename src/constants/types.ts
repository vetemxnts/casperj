export type scrollAnimationStyle = {
	onHidden: string[];
	onVisible: string[];
};

export type scrollObserverProps = {
	className?: string;
	children?: React.ReactNode;
	scrollAnimation: scrollAnimationStyle;
};

export type iconWithCaption = {
	icon: () => React.ReactNode;
	name: string;
	href: string;
};
