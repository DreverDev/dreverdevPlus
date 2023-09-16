export const useMail = () => {
    const sendMail = async (name: string,email: string, message: string) => {
      try {
        const payload = {
          name: name,
          email: email,
          message: message,
          date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
        };
  
        const response = await fetch('/api/sendMail', {
          method: 'POST', // Cambiar a POST para enviar datos al servidor
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload), // Convertir el objeto a JSON
        });
  
        const json = await response.json();
        return json;
      } catch (error) {
        console.log(error);
      }
    };
  
    return {
      sendMail,
    };
  };
  