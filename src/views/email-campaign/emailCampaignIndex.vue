<template>
  <div class="">
    <!-- Header Section -->
    <div
      class="items-center justify-between inline-block w-full px-5 py-5 bg-white border border-gray-200 md:flex"
    >
      <h6 class="text-base font-medium leading-normal text-black">
        All Campaigns (24)
      </h6>

      <div class="flex items-center mt-3 space-x-3 md:space-x-6 md:mt-0">
        <div class="relative flex items-center">
          <img
            src="../../assets/menu-items/search-icon.svg"
            class="absolute w-5 left-2"
            alt=""
          />
          <input
            type="text"
            placeholder="Search Campaigns"
            class="w-full px-8 py-3 border border-gray-200 rounded-md xl:w-72 bg-primary-indigo-light"
          />
        </div>
        <button
          class="w-full px-4 py-3 text-sm font-normal leading-normal text-center text-white rounded-md bg-primary-indigo hover:bg-indigo-200"
        >
          + Add Campaign
        </button>
      </div>
    </div>

    <!-- Campaign's Table data section -->
    <div class="relative px-3 mt-5 overflow-x-auto md:px-6">
      <table class="w-full text-sm text-left text-gray-500 shadow-md">
        <thead class="text-xs text-gray-700 uppercase bg-primary-indigo-50">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox
                </label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">Campaign Details</th>
            <th scope="col" class="px-6 py-3">Report</th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
            <th scope="col" class="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-indigo-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 space-x-2 font-medium text-gray-900 whitespace-nowrap"
            >
              <img src="../../assets/progress/campaign-progress.svg" alt="" />
              <div>
                <label
                  for=""
                  class="flex items-center text-base font-semibold leading-normal text-indigo-500 cursor-pointer"
                >
                  SW Zero Personalisation 1
                </label>
                <label
                  for=""
                  class="flex items-center text-base font-normal leading-normal text-gray-400"
                >
                  <img
                    src="../../assets/progress/dot-icon.svg"
                    class="mr-2"
                    alt=""
                  />
                  Sent on 15 Apr 2023 |3 Sequences
                </label>
              </div>
            </th>
            <!-- <th></th> -->
            <td class="px-6 py-4">
              <h6
                class="text-base font-semibold leading-normal text-indigo-500"
              >
                520
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Sent
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal text-yellow-500"
              >
                39 <span class="text-xs font-normal text-gray-400">19.6%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Clicked
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #bf51c1"
              >
                202 <span class="text-xs font-normal text-gray-400">39.8%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Opened
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #51c1c1"
              >
                4 <span class="text-xs font-normal text-gray-400">12.4%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Replied
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #2cdb28"
              >
                0 <span class="text-xs font-normal text-gray-400">0.0%</span>
              </h6>
              <label
                for=""
                class="flex items-center w-32 text-base font-normal leading-normal text-gray-500"
                >Positive Reply
                <span
                  ><img src="../../assets/info-icon.png" class="w-5" alt=""
                /></span>
              </label>
            </td>
            <td class="flex items-center px-6 py-4 space-x-3">
              <img
                src="../../assets/menu-items/pause-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/filter-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/dot-icon.svg"
                alt=""
                class="cursor-pointer"
              />
            </td>
            <td></td>
          </tr>

          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-indigo-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 space-x-2 font-medium text-gray-900 whitespace-nowrap"
            >
              <img src="../../assets/progress/campaign-progress.svg" alt="" />
              <div>
                <label
                  for=""
                  class="flex items-center text-base font-semibold leading-normal text-indigo-500 cursor-pointer"
                >
                  SW Zero Personalisation 1
                </label>
                <label
                  for=""
                  class="flex items-center text-base font-normal leading-normal text-gray-400"
                >
                  <img
                    src="../../assets/progress/dot-icon.svg"
                    class="mr-2"
                    alt=""
                  />
                  Sent on 15 Apr 2023 |3 Sequences
                </label>
              </div>
            </th>
            <!-- <th></th> -->
            <td class="px-6 py-4">
              <h6
                class="text-base font-semibold leading-normal text-indigo-500"
              >
                520
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Sent
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal text-yellow-500"
              >
                39 <span class="text-xs font-normal text-gray-400">19.6%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Clicked
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #bf51c1"
              >
                202 <span class="text-xs font-normal text-gray-400">39.8%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Opened
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #51c1c1"
              >
                4 <span class="text-xs font-normal text-gray-400">12.4%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Replied
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #2cdb28"
              >
                0 <span class="text-xs font-normal text-gray-400">0.0%</span>
              </h6>
              <label
                for=""
                class="flex items-center w-32 text-base font-normal leading-normal text-gray-500"
                >Positive Reply
                <span
                  ><img src="../../assets/info-icon.png" class="w-5" alt=""
                /></span>
              </label>
            </td>
            <td class="flex items-center px-6 py-4 space-x-3">
              <img
                src="../../assets/menu-items/pause-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/filter-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/dot-icon.svg"
                alt=""
                class="cursor-pointer"
              />
            </td>
            <td></td>
          </tr>

          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-indigo-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 space-x-2 font-medium text-gray-900 whitespace-nowrap"
            >
              <img src="../../assets/progress/campaign-progress.svg" alt="" />
              <div>
                <label
                  for=""
                  class="flex items-center text-base font-semibold leading-normal text-indigo-500 cursor-pointer"
                >
                  SW Zero Personalisation 1
                </label>
                <label
                  for=""
                  class="flex items-center text-base font-normal leading-normal text-gray-400"
                >
                  <img
                    src="../../assets/progress/dot-icon.svg"
                    class="mr-2"
                    alt=""
                  />
                  Sent on 15 Apr 2023 |3 Sequences
                </label>
              </div>
            </th>
            <!-- <th></th> -->
            <td class="px-6 py-4">
              <h6
                class="text-base font-semibold leading-normal text-indigo-500"
              >
                520
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Sent
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal text-yellow-500"
              >
                39 <span class="text-xs font-normal text-gray-400">19.6%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Clicked
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #bf51c1"
              >
                202 <span class="text-xs font-normal text-gray-400">39.8%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Opened
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #51c1c1"
              >
                4 <span class="text-xs font-normal text-gray-400">12.4%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Replied
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #2cdb28"
              >
                0 <span class="text-xs font-normal text-gray-400">0.0%</span>
              </h6>
              <label
                for=""
                class="flex items-center w-32 text-base font-normal leading-normal text-gray-500"
                >Positive Reply
                <span
                  ><img src="../../assets/info-icon.png" class="w-5" alt=""
                /></span>
              </label>
            </td>
            <td class="flex items-center px-6 py-4 space-x-3">
              <img
                src="../../assets/menu-items/pause-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/filter-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/dot-icon.svg"
                alt=""
                class="cursor-pointer"
              />
            </td>
            <td></td>
          </tr>

          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-indigo-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 space-x-2 font-medium text-gray-900 whitespace-nowrap"
            >
              <img src="../../assets/progress/campaign-progress.svg" alt="" />
              <div>
                <label
                  for=""
                  class="flex items-center text-base font-semibold leading-normal text-indigo-500 cursor-pointer"
                >
                  SW Zero Personalisation 1
                </label>
                <label
                  for=""
                  class="flex items-center text-base font-normal leading-normal text-gray-400"
                >
                  <img
                    src="../../assets/progress/dot-icon.svg"
                    class="mr-2"
                    alt=""
                  />
                  Sent on 15 Apr 2023 |3 Sequences
                </label>
              </div>
            </th>
            <!-- <th></th> -->
            <td class="px-6 py-4">
              <h6
                class="text-base font-semibold leading-normal text-indigo-500"
              >
                520
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Sent
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal text-yellow-500"
              >
                39 <span class="text-xs font-normal text-gray-400">19.6%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Clicked
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #bf51c1"
              >
                202 <span class="text-xs font-normal text-gray-400">39.8%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Opened
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #51c1c1"
              >
                4 <span class="text-xs font-normal text-gray-400">12.4%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Replied
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #2cdb28"
              >
                0 <span class="text-xs font-normal text-gray-400">0.0%</span>
              </h6>
              <label
                for=""
                class="flex items-center w-32 text-base font-normal leading-normal text-gray-500"
                >Positive Reply
                <span
                  ><img src="../../assets/info-icon.png" class="w-5" alt=""
                /></span>
              </label>
            </td>
            <td class="flex items-center px-6 py-4 space-x-3">
              <img
                src="../../assets/menu-items/pause-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/filter-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/dot-icon.svg"
                alt=""
                class="cursor-pointer"
              />
            </td>
            <td></td>
          </tr>

          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-indigo-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 space-x-2 font-medium text-gray-900 whitespace-nowrap"
            >
              <img src="../../assets/progress/campaign-progress.svg" alt="" />
              <div>
                <label
                  for=""
                  class="flex items-center text-base font-semibold leading-normal text-indigo-500 cursor-pointer"
                >
                  SW Zero Personalisation 1
                </label>
                <label
                  for=""
                  class="flex items-center text-base font-normal leading-normal text-gray-400"
                >
                  <img
                    src="../../assets/progress/dot-icon.svg"
                    class="mr-2"
                    alt=""
                  />
                  Sent on 15 Apr 2023 |3 Sequences
                </label>
              </div>
            </th>
            <!-- <th></th> -->
            <td class="px-6 py-4">
              <h6
                class="text-base font-semibold leading-normal text-indigo-500"
              >
                520
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Sent
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal text-yellow-500"
              >
                39 <span class="text-xs font-normal text-gray-400">19.6%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Clicked
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #bf51c1"
              >
                202 <span class="text-xs font-normal text-gray-400">39.8%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Opened
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #51c1c1"
              >
                4 <span class="text-xs font-normal text-gray-400">12.4%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Replied
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #2cdb28"
              >
                0 <span class="text-xs font-normal text-gray-400">0.0%</span>
              </h6>
              <label
                for=""
                class="flex items-center w-32 text-base font-normal leading-normal text-gray-500"
                >Positive Reply
                <span
                  ><img src="../../assets/info-icon.png" class="w-5" alt=""
                /></span>
              </label>
            </td>
            <td class="flex items-center px-6 py-4 space-x-3">
              <img
                src="../../assets/menu-items/pause-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/filter-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/dot-icon.svg"
                alt=""
                class="cursor-pointer"
              />
            </td>
            <td></td>
          </tr>
          <tr class="bg-white border-b hover:bg-gray-100">
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-indigo-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              class="flex items-center px-6 py-4 space-x-2 font-medium text-gray-900 whitespace-nowrap"
            >
              <img src="../../assets/progress/campaign-progress.svg" alt="" />
              <div>
                <label
                  for=""
                  class="flex items-center text-base font-semibold leading-normal text-indigo-500 cursor-pointer"
                >
                  SW Zero Personalisation 1
                </label>
                <label
                  for=""
                  class="flex items-center text-base font-normal leading-normal text-gray-400"
                >
                  <img
                    src="../../assets/progress/dot-icon.svg"
                    class="mr-2"
                    alt=""
                  />
                  Sent on 15 Apr 2023 |3 Sequences
                </label>
              </div>
            </th>
            <!-- <th></th> -->
            <td class="px-6 py-4">
              <h6
                class="text-base font-semibold leading-normal text-indigo-500"
              >
                520
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Sent
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal text-yellow-500"
              >
                39 <span class="text-xs font-normal text-gray-400">19.6%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Clicked
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #bf51c1"
              >
                202 <span class="text-xs font-normal text-gray-400">39.8%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Opened
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #51c1c1"
              >
                4 <span class="text-xs font-normal text-gray-400">12.4%</span>
              </h6>
              <label
                for=""
                class="text-base font-normal leading-normal text-gray-500"
                >Replied
              </label>
            </td>
            <td class="px-6 py-4">
              <h6
                class="flex items-center text-base font-semibold leading-normal"
                style="color: #2cdb28"
              >
                0 <span class="text-xs font-normal text-gray-400">0.0%</span>
              </h6>
              <label
                for=""
                class="flex items-center w-32 text-base font-normal leading-normal text-gray-500"
                >Positive Reply
                <span
                  ><img src="../../assets/info-icon.png" class="w-5" alt=""
                /></span>
              </label>
            </td>
            <td class="flex items-center px-6 py-4 space-x-3">
              <img
                src="../../assets/menu-items/pause-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/filter-icon.svg"
                alt=""
                class="cursor-pointer"
              />
              <img
                src="../../assets/menu-items/dot-icon.svg"
                alt=""
                class="cursor-pointer"
              />
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup></script>
