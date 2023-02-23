<div class="group relative">
	<slot name="activator" />
	<div
		class="
			scale-0 group-hover:scale-100 transition-transform duration-500
			-translate-x-1/2
			absolute bottom-full left-1/2 z-10 origin-bottom px-2 mb-1
			bg-amber-600 rounded-md
			after:absolute after:top-full after:left-1/2 after:-ml-2 after:border-4
			after:border-transparent after:border-t-amber-600
		"
	>
		<slot name="tooltip" />
	</div>
</div>
