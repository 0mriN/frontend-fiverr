import { eventBus, showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { useState, useEffect, useRef } from 'react'
import { socketService, SOCKET_EVENT_ORDER_ADDED, SOCKET_EVENT_ORDER_UPDATED } from '../services/socket.service'
import { store } from '../store/store'
import { getActionAddOrder } from '../store/actions/order.actions'
import errorIcon from '../assets/img/svg/error-icon.png'
import successIcon from '../assets/img/svg/success-icon.svg'

export function UserMsg() {
	const [msg, setMsg] = useState(null)
	const timeoutIdRef = useRef()

	useEffect(() => {
		const unsubscribe = eventBus.on('show-msg', msg => {
			setMsg(msg)
			if (timeoutIdRef.current) {
				timeoutIdRef.current = null
				clearTimeout(timeoutIdRef.current)
			}
			timeoutIdRef.current = setTimeout(closeMsg, 3000)
		})

		socketService.on(SOCKET_EVENT_ORDER_ADDED, order => {
			showSuccessMsg(`New order ${order.gig.title}`)
			store.dispatch(getActionAddOrder(order))
		})
		
		socketService.on(SOCKET_EVENT_ORDER_UPDATED, order => {
			console.log('update order', order.status)
			if (order.status === 'Completed') {
				showSuccessMsg(`Your order has been approved ! ${order.gig.title}`)
			} else if (order.status === 'Rejected') {
				showErrorMsg(`Your order has been rejected. ${order.gig.title}`)

			}
		})

		return () => {
			unsubscribe()
			socketService.off(SOCKET_EVENT_ORDER_ADDED)
			socketService.off(SOCKET_EVENT_ORDER_UPDATED)
		}
	}, [])

	function closeMsg() {
		setMsg(null)
	}

	function msgClass() {
		return msg ? 'visible' : ''
	}
	return (
		<section className={`user-msg ${msg?.type} ${msgClass()}`}>
			<button onClick={closeMsg}>x</button>
			{msg && (<div>
				{msg?.type === 'success' && (
					<img src={successIcon} alt="Success" className="user-msg-icon" />
				)}
				{msg?.type === 'error' && (
					<img src={errorIcon} alt="Error" className="-user-msg-icon" />
				)}
			</div>)}
			{msg?.txt}
		</section>
	)
}
