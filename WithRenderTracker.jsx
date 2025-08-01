import { useRef, useEffect } from 'react'

const WithRenderTracker = WrapComp => {
	return props => {
		const countRef = useRef(0)
		useEffect(() => {
			++countRef.current
		}, [props])

		console.log(`Компонент ${props.name} рендерился ${countRef.current} раз`)

		return <WrapComp {...props} />
	}
}

export default WithRenderTracker
