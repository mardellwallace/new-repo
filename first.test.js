async function deleteRequest() {
  try {
      const response = await fetch('https://79ecc735-746a-4b71-838c-6f15a9ac17d9.containerhub.tripleten-services.com/api/v1/kits/7', {
              method: 'DELETE'
          });
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error(error);
  }
}

deleteRequest()