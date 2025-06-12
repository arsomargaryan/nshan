import React from 'react'

type Props = {
  onClose: () => void
}

export default function MapRestaurant({ onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-xl shadow-lg">
        <button
          className="absolute top-2 right-2 text-black text-xl font-bold"
          onClick={onClose}
        >
          <i className=" text-2xl fa-solid fa-xmark"></i>
        </button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.190718877919!2d44.0499824!3d40.1603072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406af13b24281739%3A0x85e4dc8a112287e2!2sLe%20man!5e0!3m2!1sru!2sam!4v1749689404314!5m2!1sru!2sam"
          width="350"
          height="350"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
    </div>
  )
}
