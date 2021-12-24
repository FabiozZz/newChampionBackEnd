import React from 'react';
import NavigateReports from 'components/Reports/NavigateReports';
import { Redirect } from 'components/common/Redirect';
import HeaderNav from 'components/common/HeaderNav';

const VisitedReport = () => {
	return (
		<>
			<HeaderNav />
			<Redirect padding={true} title={'Отчеты'} to={'/reports'} />
			<div className={'gcol-12'}>
				<NavigateReports />
			</div>

			<h1>отчеты посещений</h1>
		</>
	);
};

export default VisitedReport;
