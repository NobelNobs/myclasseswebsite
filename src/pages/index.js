import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			text-align="center"
			padding="100px 0"
			sm-padding="40px 0"
			background="#f7e1c4 linear-gradient(0deg,#fffcf8 81.9%,rgba(0,0,0,1) 100%)"
			hover-border-color="#ffffff"
			hover-border-width="0px"
			hover-border-style="outset"
			justify-content="stretch"
		>
			<Text
				as="h1"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#101681"
			>
				SADHI CLASSES
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Components.OnlineClasses>
					<Override slot="image" background="#f9e5b4 conic-gradient(from 0deg at center,rgba(0,0,0,0) 0%,#f9d98d 100%) 0% 0% /auto repeat scroll padding-box" />
					<Text>
						skndchfsdiu xsdf
						<br />
						sd
						<br />
						xcfs
						<br />
						fs
						<br />
						df
						<br />
						xs
						<br />
						dx
						<br />
						sd
						<br />
						fsdfs
						<br />
						f
						<br />
						s
						<br />
						s
						<br />
						sx
						<br />
						s
						<br />
						f
						<br />
						xs
					</Text>
				</Components.OnlineClasses>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1516728043722-b394cb2f689e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});