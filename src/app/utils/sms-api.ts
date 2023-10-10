export const handleSendSMS = async (number: any) => {
    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number}),
      });

      if (response.ok) {
        console.log('SMS успешно отправлено');
      } else {
        console.error('Ошибка отправки SMS');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };
  export const handleSendCode = async (number: any) => {
    try {
      const response = await fetch(`/api/send-sms?number=${number}`, {
        method: 'GET',
      });
  
      if (response.ok) {
        const data = await response.json();
        debugger
        return data.toString(); 
      } else {
        console.error('Произошла ошибка:', response.statusText);
        return null; 
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
      return null; 
    }
  };
  