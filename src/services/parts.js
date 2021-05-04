import apiService from './api';

export default {
  index(pageNumber) {
    return apiService()
      .get(`/parts?page=${pageNumber}`)
      .then(({ data : { data } }) => data)
      .catch(e => console.error(e));
  },

  update(partId, values) {
    return apiService().post('/parts', { id: partId, ...values });
  },
};
