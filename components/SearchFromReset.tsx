'use client'

import Link from 'next/link'
import React from 'react'

function SearchFromReset() {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement
        if (form) form.reset
    }
    return (
        <button type='reset' onCanPlay={reset}>
            <Link href={'/'} className='search-btn text-white size-5'>X</Link>
        </button>
    )
}

export default SearchFromReset 