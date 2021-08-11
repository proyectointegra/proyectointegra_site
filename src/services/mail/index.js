import HttpClient from '../httpClient';

const baseUrl = 'mail';

const volunteerEmail = ({
  name, canton, email, phone, university, career, schedule, hasExp, comment
}) => HttpClient.post(`${baseUrl}/volunteer`, {
  name, canton, email, phone, university, career, schedule, hasExp, comment
});

const tcuEmail = ({
  name, canton, email, phone, university, career, schedule, hasExp, comment
}) => HttpClient.post(`${baseUrl}/tcu`, {
  name, canton, email, phone, university, career, schedule, hasExp, comment
});

export default {
  volunteerEmail,
  tcuEmail,
};
