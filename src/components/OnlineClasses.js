import React from "react";
import { useOverrides } from "@quarkly/components";
import { Image, Box } from "@quarkly/widgets";
const defaultProps = {
	"padding": "10px"
};
const overrides = {
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000",
			"width": "320px",
			"max-width": "100%"
		}
	}
};

const OnlineClasses = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Image {...override("image")} />
		{children}
	</Box>;
};

Object.assign(OnlineClasses, { ...Box,
	defaultProps,
	overrides
});
export default OnlineClasses;