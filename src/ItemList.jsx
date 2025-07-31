import { memo} from 'react'
import './App.css'

const ItemList = ({ list, text }) => {

	const filterItems = () => {
		if (!text) return []
		return list.filter(item => item.includes(text))
	}
	return (
		<ul className='list'>
			{filterItems().map((item, index) => {
				return (
					<li className='list-item' key={index}>
						{item}
					</li>
				)
			})}
		</ul>
	)
}

export default memo(ItemList)
