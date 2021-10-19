import { Client, isMember } from '@osu-wams/grouper';

const client = new Client({
  host: process.env.GROUPER_HOST?.toString() ?? '',
  username: process.env.GROUPER_USERNAME,
  password: process.env.GROUPER_PASSWORD,
});

// returns boolean in response body based on if the onid is in the grouper group
export const hasMember = async (event) => {
  const missingParamResponse = (message) => ({
    statusCode: 400,
    body: message,
  });

  const { group, onid } = event;
  if (!group) {
    return missingParamResponse('group is required in the request body');
  }
  if (!onid) {
    return missingParamResponse('onid is required in the request body');
  }

  const result = await isMember(client, group, onid);
  return { 
    statusCode: 200,
    body: {
      isMember: result,
    }
  };
}

export default hasMember;
