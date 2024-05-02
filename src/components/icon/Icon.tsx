import iconsSprite from '../../assets/image/icons-sprite.svg'

type IconPropsType = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
	color?: string
}
export function Icon(props: IconPropsType) {
	console.log(props)
	return (
		<svg
			width={props.width || '50'}
			height={props.height || '50'}
			viewBox={props.viewBox || '0 0 50 50'}
			fill={props.color || '#000000'}
			xmlns='http://www.w3.org/2000/svg'
		>
			<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
		</svg>
	)
}
