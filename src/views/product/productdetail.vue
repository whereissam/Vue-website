<template>
  <div class="productdetail">
   <body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <body class="font-mono bg-gray-400">
		<!-- Container -->
		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">
				<!-- Row -->
				<div class="w-full xl:w-3/4 lg:w-11/12 flex">
					<!-- Col -->
					<div
						class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bd-top"
						style="background-image: url('https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=600&q=80')"
					></div>
					<!-- Col -->
          
					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<div class="px-8 mb-4 text-center">
							<h3 class="pt-4 mb-2 text-2xl">Lighthouse Lantern</h3>
							<p class="mb-4 text-sm text-gray-700 mt-10">
								$69.00
							</p>
						</div>
						<div class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<p class="block mb-2 text-sm font-bold text-gray-700">
									Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.
								</p>
							</div>
							<div class="mb-6 text-center p-3">
                <div class="mb-6 border-red quantity">
                  <button>-</button>
                  <input class="w-10 text-center input-text qty text" type="name" id="quantity_xxx" step="1" min="1" max name="quantity" value="1" size="4" placeholder pattern="[0-9]"> 
                  <button>+</button>
                </div>
								<button
									class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
									type="button"
								>
									Add to cart
								</button>
							</div>
							<hr class="mb-6 border-t" />
            </div>
					</div>
				</div>
			</div>
		</div>
	</body>
</body>
  </div>
</template>