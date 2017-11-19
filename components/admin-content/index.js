
import { withRouter } from 'next/router';

function AdminContent({ router, href }) { 
  return (
    <div>
      {router.pathname}
      <div>{href}</div>
    </div>
  );
};

export default withRouter(AdminContent);
