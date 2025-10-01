import React from 'react'

function AddressBook() {
  return (
    <div className='w-full min-h-screen'>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-6">Address Book</h2>

  <form className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* Mobile Number */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Mobile Number <span className="text-red-500">*</span>
      </label>
      <input type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* Flat / House No. */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Flat / House No., Building, Company Name <span className="text-red-500">*</span>
      </label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* Street / Sector / Village */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Street / Sector / Village <span className="text-red-500">*</span>
      </label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* Pincode */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Pincode <span className="text-red-500">*</span>
      </label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* Area */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Area</label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* City */}
    <div>
      <label className="block text-sm font-medium text-gray-700">City</label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* State */}
    <div>
      <label className="block text-sm font-medium text-gray-700">State</label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* Country */}
    <div>
      <label className="block text-sm font-medium text-gray-700">Country</label>
      <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* Email */}
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Email <span className="text-red-500">*</span>
      </label>
      <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2" />
    </div>

    {/* Address Type */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">Use this address as:</label>
      <div className="flex gap-4">
        <label className="flex items-center gap-2">
          <input type="radio" name="addressType" value="Home" className="accent-blue-500" />
          Home
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="addressType" value="Office" className="accent-blue-500" />
          Office
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="addressType" value="Others" className="accent-blue-500" />
          Others
        </label>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end gap-4 pt-4">
      <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
        Cancel
      </button>
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Add Address
      </button>
    </div>
  </form>
</div>
    </div>
  )
}

export default AddressBook