import React from 'react'

const withTaskBar = (WrappedComponent) => {
    class WithTaskBar extends React.Component {
        render() {
            return (
                <WrappedComponent />
            )
        }
    }
    WithTaskBar.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`
    return WithTaskBar
}

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default withTaskBar