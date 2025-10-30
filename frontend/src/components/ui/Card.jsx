import React from 'react'

const Card = ({ icon, title, desc,data }) => {
    return (
        <div className="bg-white text-gray-700 rounded-xl p-6 shadow-lg  border-indigo-500 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
            <div className="text-3xl mb-3">{icon}{data}</div>
            <h3 className="text-indigo-600 font-semibold text-sm uppercase tracking-wide mb-2">
                {title}
            </h3>
            <p className="text-sm leading-relaxed">{desc}</p>
        </div>
    )
}

export default Card