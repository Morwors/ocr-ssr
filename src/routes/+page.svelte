<script>
    import "../app.css";
    import {enhance} from '$app/forms';

    let fileInput
    let isDisabled = true
    let imageText = ""
    let loading = false
    export let data;

</script>
<div class="w-full">
    <div class="flex flex-col gap-5 p-10 w-full">
        <form class="p-10 flex flex-col items-center gap-10" method="POST" enctype="multipart/form-data"
              use:enhance={({ formElement, formData, action, cancel }) => {
                  console.log("Loading")
                  loading = true
                    return async ({ result }) => {
                        imageText = result.data.imageText
                        loading = false
		            };
              }}>

            <div on:click={fileInput.click()}
                 class="cursor-pointer w-[20rem] h-[20rem] bg-gray-300 rounded-[5px] flex items-center justify-center">
                <svg class="h-10" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/>
                </svg>
                <input on:change={()=>{isDisabled = false}} bind:this={fileInput} required class="hidden" id="photo"
                       name="photo" type="file">
            </div>
            <button disabled="{isDisabled}"
                    class="bg-blue-500 text-white w-[150px] h-[40px] rounded-[5px] disabled:bg-gray-500 flex justify-center items-center">
                {#if loading}

                    <div class="self-center" role="status">
                        <svg aria-hidden="true"
                             class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"/>
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>

                {:else}
                    Submit
                {/if}
            </button>

        </form>
        <textarea bind:value={imageText} class="shadow rounded-[5px] p-2" style="resize: none" disabled
                  rows="10"></textarea>

    </div>
</div>
