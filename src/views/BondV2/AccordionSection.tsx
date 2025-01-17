import { t, Trans } from "@lingui/macro";
import { ClaimBondTableData } from "./ClaimRow";
import { ExpandMore } from "@material-ui/icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import "./choosebond.scss";
import { IUserNote } from "src/slices/BondSliceV2";

const AccordionSection = ({
  bonds,
  title,
  gOHM,
  vested,
}: {
  bonds: IUserNote[];
  title: string;
  gOHM: boolean;
  vested: boolean;
}) => (
  <Accordion defaultExpanded classes={{ root: "accordion-root" }}>
    <AccordionSummary expandIcon={<ExpandMore />} aria-controls={`${title}-content`} id={`${title}-header`}>
      <Typography>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Table aria-label={title}>
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Trans>Bond</Trans>
            </TableCell>
            <TableCell align="center">{`Duration`}</TableCell>
            <TableCell align="center">{`Remaining`}</TableCell>
            <TableCell align="center">{vested ? t`Payout` : t`Pending Payout`}</TableCell>
            {/* <TableCell align="right"></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {bonds.map((bond, i) => (
            <ClaimBondTableData key={i} userNote={bond} gOHM={gOHM} />
          ))}
        </TableBody>
      </Table>
    </AccordionDetails>
  </Accordion>
  // </TableContainer>
);

export default AccordionSection;
