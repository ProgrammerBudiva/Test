<?php
/**
 * Created by PhpStorm.
 * User: andrey
 * Date: 10.07.17
 * Time: 13:49
 */
class ControllerPricespdfSadresult extends Controller
{
    public function index()
    {
        require($_SERVER['DOCUMENT_ROOT'] . '/system/library/PDF/TESTPDF.php');
        require($_SERVER['DOCUMENT_ROOT'] . '/system/library/fpdi/fpdi.php');

        $pdf = new FPDI();

        $files = array("gen_prices/sad/agrotkan.pdf", "gen_prices/sad/agrovolokno.pdf",
            "gen_prices/sad/blago.pdf", "gen_prices/sad/instrumenty.pdf", "gen_prices/sad/miniteplicy.pdf", "gen_prices/sad/setki.pdf");
        $pageCount = 0;



        foreach ($files AS $file) {
            // get the page count
            $pageCount = $pdf->setSourceFile($file);
            // iterate through all pages
            for ($pageNo = 1; $pageNo <= $pageCount; $pageNo++) {
                // import a page
                $templateId = $pdf->importPage($pageNo);
                // get the size of the imported page
                $size = $pdf->getTemplateSize($templateId);

                // create a page (landscape or portrait depending on the imported page size)
                if ($size['w'] > $size['h']) {
                    $pdf->AddPage('L', array($size['w'], $size['h']));
                } else {
                    $pdf->AddPage('P', array($size['w'], $size['h']));
                }

                // use the imported page
                $pdf->useTemplate($templateId);

//                $pdf->SetFont('Helvetica');
//                $pdf->SetXY(5, 5);
//                $pdf->Write(8, 'Generated by FPDI');
            }
        }



//        file_put_contents('test.pdf', $pdf->Output());
        $pdf->Output($_SERVER['DOCUMENT_ROOT'] .'prices/sad.pdf', 'F');
    }
}