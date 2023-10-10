export const handleSendVote = async (id: string, name: string) => {
    try {
      const response = await fetch('/api/add-vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, name}),
      });
      if (response.ok) {
       return true
      } else {
        console.error('Ошибка');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };

export const handleGetVotes = async () => {
    try {
      const response = await fetch('/api/add-vote', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data 
      } else {
        console.error('Ошибка');
      }
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  };
